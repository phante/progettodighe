# ProgettoDighe

ProgettoDighe è il sito di riferimento italiano su dighe e impianti elettrici.

Dal 2005 quando è stato fondato era statico, basato su codice HTML puro e un po'
di CSS, con tutti i problemi e le limitazioni del caso.

Nel 2010 in occasione del primo restyling mi è diventantato chiaro che mantenerlo
nel formato originale fosse un lavoro improbo è stato convertito nel classico
sito dinamico basato sul classico stack LAMP usando [SPIP](https://www.spip.net/).

La speranza era quella di avere una piattaforma dinamica che consentisse anche
agli utenti di poter aggiungere articoli.

E' diventato chiaro che comunque, per quanto la piattaforma fosse facile da usare,
che per l'utente normale scrivere un testo in un linguaggio di markup era comunque
un'ostacolo quindi i contributi esterni sono andati lentamente a ridursi.

Nel 2020 l'estetica del sito ormai era inadeguata rispetto al mondo moderno fatto
di smartphone e schermi piccolo. E' partito il secondo restyling che ha reso il
sito più flessibile basato su HTML 5 e _Functional CSS_ per riuscire a creare uno
stile facile da implementare e mantenere basato su [Tachyons](https://tachyons.io/)

Il risultato finale aveva migliorato notevolmente l'usabilità del sito ma si è
scontrato con diverse assunzioni che faceva SPIP nell'output degli articoli
presentandoli in modo non ottimale e con poca possibilità di adeguarne lo stile.

A pochi mesi del restyling sto studiando di eliminare del tutto SPIP rendendo il
sito statico sfruttando i modermi motori di rendering offline.

Questo mi offre diversi vantaggi:

- meno infrastruttura da gestire, in particolare il database, potenzialmente
  il sito potrebbe essere semplicemente ospitato su un bucket S3
- meno vincoli legati all'implementazione del cms
- automazione, lavorare sui file è più facile che lavorare su db e consente
  il versioning

Per questa nuova implementazione ho scelto di sfruttare [Hugo](https://gohugo.io/).
