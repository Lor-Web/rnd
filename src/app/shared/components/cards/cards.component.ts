import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { CardComponent } from "./components/card/card.component";

interface Card {
	id: number;
	img?: string;
	label?: string;
	description?: string;
}

@Component({
	selector: "rnd-cards",
	standalone: true,
	imports: [CardComponent],
	templateUrl: "./cards.component.html",
	styleUrl: "./cards.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent {
	public sectionLabel = input<string>("");
	public readonly cards = input<Card[]>([]);
}
