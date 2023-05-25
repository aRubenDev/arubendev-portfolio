import Tilt from 'react-parallax-tilt';
import { TbBrandGithub, TbBrandLinkedin, TbMailOpened } from "react-icons/tb";
import { useTranslation } from 'react-i18next';

export default function SideCard ({classes}) {
	const { t } = useTranslation();

	return(
		<Tilt
			perspective={1800}
			className={`${classes} flex flex-col p-6 border-[2px] border-[#348798] rounded-2xl justify-center items-center text-center preserve-3d group`}
		>
			<div className="flex w-full items-center justify-between drop-shadow-xl group-hover:translate-z-5">
				<p className="text-2xl font-bold">Rubén G.</p>
				<div className="text-sm text-right text-gray-500 italic">
					<p>{t('text_desc_prog')}</p>
					<p>{t('text_desc_dev')}</p>
				</div>
			</div>
			<img src="./foto_perfil.jpg" className="m-4 group-hover:translate-z-10 object-cover h-40 w-full rounded-[20px]" />
			<p className="font-bold text-lg">aruben.guerra@gmail.com</p>
			<p className="font-bold text-lg">Madrid, España</p>
			<p className="my-2 text-md italic text-sm">&copy; {new Date().getFullYear()} Rubén. {t('text_card_copyright')}</p>
			<div className="flex justify-center items-center hover:">
				<TbBrandGithub className="w-10 h-10 p-2 border-2 rounded-full mx-2"/>
				<TbBrandLinkedin className="w-10 h-10 p-2 border-2 rounded-full mx-2"/>
			</div>
			<span className="flex w-full items-center justify-center text-2xl bg-[#348798] p-2 rounded-3xl mt-4 text-white group-hover:translate-z-5">
				<TbMailOpened className="mr-2"/> {t('text_card_cta')}
			</span>
		</Tilt>
	)
}