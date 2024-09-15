import { NgClass, NgOptimizedImage } from "@angular/common";
import {
	ChangeDetectionStrategy,
	Component,
	input,
	OnInit,
	signal
} from "@angular/core";

interface Data {
	id: number;
	label: string;
	content: {
		label: string;
		description: string;
		img: string;
	};
}
@Component({
	selector: "rnd-tabs",
	standalone: true,
	imports: [NgOptimizedImage, NgClass],
	templateUrl: "./tabs.component.html",
	styleUrl: "./tabs.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit {
	public readonly label = input<string>("");
	public readonly tabs = input.required<Data[]>();

	public readonly activeTab = signal<Data | undefined>(undefined);

	ngOnInit(): void {
		this.activeTab.set(this.tabs()[0]);
	}

	public changeTab(tab: Data) {
		this.activeTab.set(tab);
	}
}
