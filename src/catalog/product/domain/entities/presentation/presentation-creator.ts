import ProductPresentation from "../presentation";

export default class PresentationCreator {
    private readonly presentations: ProductPresentation[];

    constructor(presentations: ProductPresentation[]){
        this.presentations = presentations;
    }

    public static max5Presentations(presentations: ProductPresentation[]): boolean {
        return presentations.length <= 5;
    }

    public static createPresentations(presentationsData: Array<{id: string, name: string, type: string, netQuantity: number, unitOfMesure: string}>, presentations: ProductPresentation[]): ProductPresentation[] {
        if (!PresentationCreator.max5Presentations(presentations)) {
            throw new Error('A product cannot have more than 5 presentations.');
        }
        const newPresentations: ProductPresentation[] = [...presentations];
        presentationsData.forEach(p => {
            const presentation = ProductPresentation.build(p.id, p.name, p.type, p.netQuantity, p.unitOfMesure);
            newPresentations.push(presentation);
        });
        return newPresentations;
    }
}