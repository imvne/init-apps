# YourApp - Site Web Requirements

## Design Specifications en styled components

### Couleurs

- **Couleur de fond principale**: #FFF6EA
- **Couleur du texte**: #612A14 (logo, phrase d'accroche, bouton)
- **Couleur de fond du bouton**: #FBD9C4

### Typographies

- **Logo "Your"**: Police 'Chakra Petch' Regular
- **Logo "App"**: Police 'Epilogue' ExtraLight
- **Phrase d'accroche**: Police 'Epilogue' Regular
     - Mobile: 28px
     - Desktop: 55px
- **Texte descriptif**: Police 'Epilogue' Regular Italic
     - Mobile: 13px
     - Desktop: 38px
- **Points de fonctionnalités**: Police 'Epilogue' Light Italic
     - Mobile: 13px
     - Desktop: 38px
- **Bouton CTA**: Police 'Epilogue' Medium
     - Mobile: 16px
     - Desktop: 33px

### Layout

- **Page d'accueil**: Occupe tout l'écran (mobile et desktop), et on peut scroller
- **Responsive**: Optimisé pour mobile et desktop
- **Structure verticale**:
     1. Logo "YourApp" en haut
     2. Phrase d'accroche bipartite
     3. Texte descriptif
     4. Trois points de fonctionnalités
     5. Bouton d'appel à l'action

### Contenu

#### Logo

- "YourApp" avec typographies différentes mais les deux parties collées

#### Phrase d'accroche

- **Partie gauche**: "Tu as une idée ?"
- **Partie droite**: "On en fait une application mobile."

#### Texte descriptif

- "Tout ce qu'il vous faut pour transformer votre idée en application :"
- Aligné à gauche

#### Points de fonctionnalités

- Alignés à droite, en vertical:
     - "design moderne,"
     - "développement sur mesure,"
     - "suivi transparent."

#### Bouton CTA

- Texte: "Commencer mon projet"
- Centré

## Structure technique

- **Framework**: React + Vite
- **Styling**: CSS pur avec responsive design
- **Fonts**: Google Fonts (Chakra Petch + Epilogue)
