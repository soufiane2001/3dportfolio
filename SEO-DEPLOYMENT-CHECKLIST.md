# Checklist de déploiement SEO

## Avant mise en production

- [ ] Confirmer que `https://soufianeboutatss.sbs` est le domaine canonique définitif.
- [ ] Vérifier que toutes les routes du sitemap répondent en HTTP 200.
- [ ] Vérifier les redirections HTTP vers HTTPS et, si une version `www` existe, vers la version non-www.
- [ ] Tester les données structurées avec Rich Results Test et Schema Markup Validator.
- [ ] Vérifier les titres, descriptions et images Open Graph avec un outil de prévisualisation.
- [ ] Tester les formulaires et les liens WhatsApp sur mobile.
- [ ] Contrôler les liens externes du portfolio et retirer uniquement le bouton de démo d’un site devenu indisponible.
- [ ] Lancer Lighthouse mobile sur les pages prioritaires.

## Google Search Console

1. Ajouter la propriété domaine `soufianeboutatss.sbs`.
2. Vérifier le domaine via l’enregistrement DNS demandé par Google.
3. Soumettre `https://soufianeboutatss.sbs/sitemap.xml`.
4. Inspecter et demander l’indexation de la homepage.
5. Inspecter `/creation-site-web-casablanca`.
6. Inspecter `/site-vitrine-casablanca`.
7. Inspecter `/creation-site-ecommerce-casablanca`.
8. Vérifier les pages indexées et les éventuelles pages exclues.
9. Vérifier le rapport Core Web Vitals sur mobile et ordinateur.
10. Vérifier HTTPS et les problèmes de sécurité.
11. Vérifier les données structurées détectées.
12. Analyser les requêtes et pages tous les 28 jours, puis améliorer les contenus selon les impressions, positions et conversions.

## Mesure

- [ ] Installer GA4 uniquement avec un identifiant officiel fourni par le propriétaire.
- [ ] Ne pas dupliquer le tracker first-party déjà présent.
- [ ] Configurer, après consentement si nécessaire : `generate_lead`, `contact_form_submit`, `whatsapp_click`, `email_click`, `phone_click` et `quote_request`.
- [ ] Ne jamais compter une simple visite comme un lead.
- [ ] Définir une conversion principale sur l’envoi du formulaire ou une action de contact qualifiée.

