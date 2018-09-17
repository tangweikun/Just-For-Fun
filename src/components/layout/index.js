import React from 'react'
import { renderRoutes } from 'react-router-config'
import { translate } from 'react-i18next'

import './index.css'
const Layout = ({ route, t, i18n }) => {
  const toggle = lng => i18n.changeLanguage(lng)

  return (
    <div>
      <h1>layout</h1>
      <hr />
      {t('title')}
      <hr />
      <button onClick={() => toggle('zh')}>{t('linkZH')}</button>
      <button onClick={() => toggle('en')}>{t('linkEN')}</button>
      {/* child routes won't render without this */}
      {renderRoutes(route.routes)}
    </div>
  )
}
export default translate('loayout', { wait: true })(Layout)
