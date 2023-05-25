import { useTranslation } from 'react-i18next';

export default function Presentation () {
	const { t } = useTranslation();

	return(
		<section className="flex items-center justify-center col-span-12">
			<h1 className="text-4xl" >{t('main_section.text_presentation', {name: "Rubén"})}</h1>
		</section>
	)
}