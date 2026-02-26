import PresentationId from "./presentation/presentation-id";
import PresentationName from "./presentation/presentation-name";
import PresentationType from "./presentation/presentation-type";
import PresentationNetQuantity from "./presentation/presentation-net-quantity";
import PresentationUnitOfMesure from "./presentation/presentation-unit-of-measure";

export default class ProductPresentation {
    private readonly id: PresentationId;
    private readonly name: PresentationName;
    private readonly type: PresentationType;
    private readonly netQuantity: PresentationNetQuantity;
    private readonly unitOfMesure: PresentationUnitOfMesure;
    presentationId: any;

    constructor(id: PresentationId, name: PresentationName, type: PresentationType, netQuantity: PresentationNetQuantity, unitOfMesure: PresentationUnitOfMesure) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.netQuantity = netQuantity;
        this.unitOfMesure = unitOfMesure;
    }

    public static build(id: string, name: string, type: string, netQuantity: number, unitOfMeasure: string): ProductPresentation {
        const presentationId = new PresentationId(id);
        const presentationName = new PresentationName(name);
        const presentationType = new PresentationType(type);
        const presentationNetQuantity = new PresentationNetQuantity(netQuantity.toString());
        const presentationUnitOfMeasure = new PresentationUnitOfMesure(unitOfMeasure);

        return new ProductPresentation(presentationId, presentationName, presentationType, presentationNetQuantity, presentationUnitOfMeasure);
    }
}