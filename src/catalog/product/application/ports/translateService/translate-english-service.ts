export default interface TranslationEnglishService {
    translateToEnglish(text: string): Promise<string>;
}