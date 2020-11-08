import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div>
        <h1 className="text-l text-center text-accent-1 p-8">
          {t('FOOTER_TITLE')}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
