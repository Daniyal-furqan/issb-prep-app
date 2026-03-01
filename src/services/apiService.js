import { OpenAI } from 'openai';
import Anthropic from '@anthropic-ai/sdk';
import { GoogleGenAI } from '@google/genai';

// API Keys from environment
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const ANTHROPIC_API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Initialize clients if keys exist
const openai = OPENAI_API_KEY ? new OpenAI({ apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true }) : null;
const anthropic = ANTHROPIC_API_KEY ? new Anthropic({ apiKey: ANTHROPIC_API_KEY, dangerouslyAllowBrowser: true }) : null;
const gemini = GEMINI_API_KEY ? new GoogleGenAI({ apiKey: GEMINI_API_KEY }) : null;

/**
 * Advanced Multi-Provider AI Fallback Engine
 * Attempts to use OpenAI first, falls back to Anthropic (Claude), then Gemini.
 */
export const generateAIResponse = async (prompt, systemInstruction = "You are an expert ISSB assessor and generator.", maxTokens = 1500) => {
    let errors = [];

    // Provider 1: OpenAI (GPT-4o or 3.5-turbo)
    if (openai) {
        try {
            console.log("Attempting OpenAI...");
            const completion = await openai.chat.completions.create({
                messages: [
                    { role: "system", content: systemInstruction },
                    { role: "user", content: prompt }
                ],
                model: "gpt-4o-mini", // Cost effective model
                max_tokens: maxTokens,
            });
            return { text: completion.choices[0].message.content, provider: "OpenAI" };
        } catch (e) {
            console.error("OpenAI Error:", e);
            errors.push(`OpenAI: ${e.message}`);
        }
    }

    // Provider 2: Anthropic (Claude)
    if (anthropic) {
        try {
            console.log("Attempting Anthropic Claude...");
            const message = await anthropic.messages.create({
                max_tokens: maxTokens,
                system: systemInstruction,
                messages: [
                    { role: 'user', content: prompt }
                ],
                model: 'claude-3-haiku-20240307',
            });
            return { text: message.content[0].text, provider: "Anthropic" };
        } catch (e) {
            console.error("Anthropic Error:", e);
            errors.push(`Anthropic: ${e.message}`);
        }
    }

    // Provider 3: Gemini
    if (gemini) {
        try {
            console.log("Attempting Google Gemini...");
            const response = await gemini.models.generateContent({
                model: 'gemini-2.0-flash',
                contents: [{ role: 'user', parts: [{ text: `${systemInstruction}\n\nTask:\n${prompt}` }] }]
            });
            return { text: response.text, provider: "Gemini" };
        } catch (e) {
            console.error("Gemini Error:", e);
            errors.push(`Gemini: ${e.message}`);
        }
    }

    throw new Error(`All AI Providers failed or no API keys provided. Errors: ${errors.join(" | ")}`);
};
