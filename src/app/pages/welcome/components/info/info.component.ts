import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "rnd-info",
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: "./info.component.html",
	styleUrl: "./info.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent {}
