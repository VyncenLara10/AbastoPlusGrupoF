import { injectable } from "inversify";
import TranslationEnglishService from "../application/ports/translateService/translate-english-service";

@injectable()
export default class CrowdinTranslationService implements TranslationEnglishService {

    async translateToEnglish(text: string): Promise<string> {

        try {

            const response = await fetch("https://api.crowdin.com/api/v2/translate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.CROWDIN_TOKEN}`
                },
                body: JSON.stringify({
                    sourceLanguageId: "es",
                    targetLanguageId: "en",
                    text
                })
            });

            const data = await response.json() as { data?: { translation?: string } };

            return data?.data?.translation ?? text;

        } catch (error) {
            console.error("Error translating:", error);
            return text;
        }
    }
}