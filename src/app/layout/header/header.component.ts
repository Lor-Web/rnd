import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "rnd-header",
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
	public readonly navigationLinks = [
		"Компания",
		"Продукты",
		"Кейсы",
		"Оборудование",
		"Контакты"
	];
}
