import { useEffect } from 'react';

interface DocumentMetaOptions {
  title: string;
  description: string;
}

export function useDocumentMeta({ title, description }: DocumentMetaOptions) {
  useEffect(() => {
    document.title = title;

    const updateMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('meta[name="description"]', 'name', 'description', description);
    updateMeta('meta[property="og:title"]', 'property', 'og:title', title);
    updateMeta('meta[property="og:description"]', 'property', 'og:description', description);
    updateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  }, [title, description]);
}
