import React from 'react'
import './GoogleSlideWidget.css'

const GoogleSlideWidget: React.FC = () => {
  return (
    <div className="widget google-slide-widget">
      <h2>Google Slide</h2>
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vQ9Jv1v1IX8j4tQvMfX3wTzl9JThQuwRHpVJv3NYhCk9H0JChmFGlm6JhCocP/view"
        frameBorder="0"
        width="600"
        height="400"
        allowFullScreen
        title="Google Slide"
      ></iframe>
    </div>
  )
}

export default GoogleSlideWidget
