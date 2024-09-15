import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
	selector: "rnd-card",
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: "./card.component.html",
	styleUrl: "./card.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
	public readonly label = input<string>();
	public readonly description = input<string>();
	public readonly image = input<string>();
}
