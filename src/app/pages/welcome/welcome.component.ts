import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HeroComponent } from "../../shared/components/hero/hero.component";
import { InfoComponent } from "./components/info/info.component";
import { CardsComponent } from "../../shared/components/cards/cards.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { TabsComponent } from "../../shared/components/tabs/tabs.component";

@Component({
	selector: "rnd-welcome",
	standalone: true,
	imports: [
		HeroComponent,
		InfoComponent,
		CardsComponent,
		BannerComponent,
		TabsComponent
	],
	templateUrl: "./welcome.component.html",
	styleUrl: "./welcome.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {
	public readonly cards = [
		{
			id: 1,
			img: "/images/card-img.png",
			label: "Облачная платформа",
			description:
				"C поддержкой основных каналов связи GPGS, ZigBee, LoRaWAN, NB-IoT"
		},
		{
			id: 2,
			img: "/images/card-img.png",
			label: "Облачная платформа",
			description:
				"C поддержкой основных каналов связи GPGS, ZigBee, LoRaWAN, NB-IoT C поддержкой основных каналов связи GPGS, ZigBee, LoRaWAN, NB-IoT"
		},
		{
			id: 3,
			img: "/images/card-img.png",
			label: "Облачная платформа",
			description: "C "
		},
		{
			id: 4,
			label: "Облачная платформа",
			description:
				"C поддержкой основных каналов связи GPGS, ZigBee, LoRaWAN, NB-IoT"
		},
		{
			id: 5,
			img: "/images/card-img.png",
			label: "Облачная платформа",
			description:
				"C поддержкой основных каналов связи GPGS, ZigBee, LoRaWAN, NB-IoT"
		},
		{
			id: 6,
			img: "/images/card-img.png",
			label: "Облачная платформа",
			description:
				"C поддержкой основных каналов связи GPGS, ZigBee, LoRaWAN, NB-IoT"
		}
	];

	public readonly tabsData = [
		{
			id: 1,
			label: "Здравоохранение",
			content: {
				label: "Здравоохранение",
				description:
					"Повышение качества медицинского обслуживания и экономической эффективности медицинских учреждений. Используя датчики IoT, можно отслеживать состояние пациентов, контролировать факторы окружающей среды для предотвращения инфекций, а также автоматизировать управление запасами расходных материалов.",
				img:
					"https://c4.wallpaperflare.com/wallpaper/458/251/742/katherine-langford-pc-desktop-hd-wallpaper-preview.jpg"
			}
		},
		{
			id: 2,
			label: "Транспорт",
			content: {
				label: "Транспорт",
				description:
					"Повышение качества медицинского обслуживания и экономической эффективности медицинских учреждений. Используя датчики IoT, можно отслеживать состояние пациентов, контролировать факторы окружающей среды для предотвращения инфекций, а также автоматизировать управление запасами расходных материалов.",
				img:
					"https://c4.wallpaperflare.com/wallpaper/458/251/742/katherine-langford-pc-desktop-hd-wallpaper-preview.jpg"
			}
		},
		{
			id: 3,
			label: "Сельское хозяйство",
			content: {
				label: "Сельское хозяйство",
				description:
					"Повышение качества медицинского обслуживания и экономической эффективности медицинских учреждений. Используя датчики IoT, можно отслеживать состояние пациентов, контролировать факторы окружающей среды для предотвращения инфекций, а также автоматизировать управление запасами расходных материалов.",
				img:
					"https://c4.wallpaperflare.com/wallpaper/458/251/742/katherine-langford-pc-desktop-hd-wallpaper-preview.jpg"
			}
		},
		{
			id: 4,
			label: "ЖКХ",
			content: {
				label: "ЖКХ",
				description:
					"Повышение качества медицинского обслуживания и экономической эффективности медицинских учреждений. Используя датчики IoT, можно отслеживать состояние пациентов, контролировать факторы окружающей среды для предотвращения инфекций, а также автоматизировать управление запасами расходных материалов.",
				img:
					"https://c4.wallpaperflare.com/wallpaper/458/251/742/katherine-langford-pc-desktop-hd-wallpaper-preview.jpg"
			}
		},
		{
			id: 5,
			label: "Предложим решение",
			content: {
				label: "Предложим решение",
				description:
					"Повышение качества медицинского обслуживания и экономической эффективности медицинских учреждений. Используя датчики IoT, можно отслеживать состояние пациентов, контролировать факторы окружающей среды для предотвращения инфекций, а также автоматизировать управление запасами расходных материалов.",
				img:
					"https://c4.wallpaperflare.com/wallpaper/458/251/742/katherine-langford-pc-desktop-hd-wallpaper-preview.jpg"
			}
		}
	];
}
