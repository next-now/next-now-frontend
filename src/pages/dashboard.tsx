import * as React from 'react';
import { useTranslation } from 'react-i18next';

const IndexPage: React.FC = () => {
  const { t } = useTranslation();

  const markup = {
    __html: `<div
    class="tableauPlaceholder"
    id="viz1586094657716"
    style="position: relative"
  >
    <noscript>
      <a href="#">
        <img
          alt=" "
          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ma&#47;Mappe2_15860809771740&#47;PerformanceofSOCIToken&#47;1_rss.png"
          style="border: none"
        />
      </a>
    </noscript>
    <object class="tableauViz" style="display:none;">
      <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
      <param name="embed_code_version" value="3" />
      <param name="site_root" value />
      <param name="name" value="Mappe2_15860809771740&#47;PerformanceofSOCIToken" />
      <param name="tabs" value="no" />
      <param name="toolbar" value="yes" />
      <param
        name="static_image"
        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ma&#47;Mappe2_15860809771740&#47;PerformanceofSOCIToken&#47;1.png"
      />
      <param name="animate_transition" value="yes" />
      <param name="display_static_image" value="yes" />
      <param name="display_spinner" value="yes" />
      <param name="display_overlay" value="yes" />
      <param name="display_count" value="yes" />
    </object>
  </div>
  <script id="myScript">
  var divElement = document.getElementById('viz1586094657716');
  var vizElement = divElement.getElementsByTagName('object')[0];

  if (divElement.offsetWidth > 800) {
      vizElement.style.minWidth = '420px';
      vizElement.style.maxWidth = '1550px';
      vizElement.style.width = '100%';
      vizElement.style.minHeight = '587px';
      vizElement.style.maxHeight = '1187px';
      vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
  } else if (divElement.offsetWidth > 500) {
      vizElement.style.minWidth = '420px';
      vizElement.style.maxWidth = '1550px';
      vizElement.style.width = '100%';
      vizElement.style.minHeight = '587px';
      vizElement.style.maxHeight = '1187px';
      vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
  } else {
      vizElement.style.width = '100%';
      vizElement.style.height = '1827px';
  }
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
  </script>`,
  };

  React.useEffect(() => {
    const script = document.getElementById('myScript').innerHTML;
    window.eval(script);
  }, []);

  return (
    <>
      <h1 className="mb-8">{t('Dashboard')}</h1>
      <div dangerouslySetInnerHTML={markup}></div>
    </>
  );
};

export default IndexPage;
