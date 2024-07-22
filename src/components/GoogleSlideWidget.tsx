import React from 'react';

const GoogleSlideWidget: React.FC = () => {
  return (
    <div className="widget bg-white p-4 rounded shadow-md flex flex-col items-center">
      <h2 className="text-xl mb-2">Google Slide</h2>
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vQ9Jv1v1IX8j4tQvMfX3wTzl9JThQuwRHpVJv3NYhCk9H0JChmFGlm6JhCocP/view"
        frameBorder="0"
        className="w-full h-64"
        allowFullScreen
        title="Google Slide"
      ></iframe>
    </div>
  );
};

export default GoogleSlideWidget;
