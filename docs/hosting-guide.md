# Hosting guide

## Recommended hosting path: Cloudflare Pages

1. Create a GitHub repository.
2. Upload this project folder into the repository.
3. Go to Cloudflare Pages and create a new Pages project.
4. Connect the GitHub repository.
5. Use these build settings:
   - Framework preset: `None`
   - Build command: leave blank
   - Output directory: `/` or the project root
6. Deploy.
7. Add a custom domain in the Pages project settings.

## Easier beginner path: Netlify drag-and-drop

1. Zip or open the folder.
2. Drag the project folder into Netlify's deploy area.
3. Netlify gives you a temporary `.netlify.app` URL.
4. Add your custom domain later.

## GitHub Pages path

1. Create a public GitHub repo.
2. Upload the files.
3. Go to Settings → Pages.
4. Deploy from the main branch.
5. Add your custom domain when ready.
