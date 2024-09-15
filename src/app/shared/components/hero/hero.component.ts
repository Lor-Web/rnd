import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
	selector: "rnd-hero",
	standalone: true,
	imports: [],
	templateUrl: "./hero.component.html",
	styleUrl: "./hero.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
	public readonly title = input<string>();
}
