import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg width="24" height="24" viewBox="0 0 500 500" aria-label="Logo"fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M137.048 250L250 137.048L362.952 250L250 362.952L137.048 250Z" fill="currentColor"/>
<path d="M0 250L181.476 68.5241L219.126 106.175L37.6506 287.651L0 250Z" fill="currentColor"/>
<path d="M280.873 393.825L371.611 303.087L462.349 212.349L500 250L318.524 431.476L280.873 393.825Z" fill="currentColor"/>
<path d="M212.349 37.6506L250 0L431.476 181.476L393.825 219.126L212.349 37.6506Z" fill="currentColor"/>
<path d="M68.5241 318.524L106.175 280.873L287.651 462.349L250 500L68.5241 318.524Z" fill="currentColor"/>
</svg>

        Selaura Client
      </>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/',
      active: 'nested-url',
    },
  ],
  githubUrl: "https://github.com/selauraclient/docs",
};
