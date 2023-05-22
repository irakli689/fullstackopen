```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    Note right of user: The user goes to single-page app

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server
```
