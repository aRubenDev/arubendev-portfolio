import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../constants'

export default function Languaje () {
	const { i18n, t } = useTranslation();

	const onChangeLang = (e) => {
	  const lang_code = e.target.value;
	  i18n.changeLanguage(lang_code);
	};

	return(
		<div className="grid grid-cols-2 w-full gap-5 place-content-center">
			{
				LANGUAGES.map(({code, label}) => (
					<span>
						<input type="radio" id={code} name="lang" className="hidden peer" checked={i18n.language === code} value={code} required onChange={onChangeLang} />
		        <label for={code} className="inline-flex items-center justify-between w-full py-2 px-3 text-gray-500 bg-white border border-gray-200 rounded-3xl cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
		        		<div className="block">
		                <div className="w-full text-lg font-semibold">{t(label)}</div>
		            </div>
		        </label>
					</span>
				))
			}
		</div>
	)
}