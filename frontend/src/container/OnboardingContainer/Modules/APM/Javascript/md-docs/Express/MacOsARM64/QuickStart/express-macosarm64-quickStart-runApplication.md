Once you are done intrumenting your JavaScript application, you can run it using the below command

```bash
OTEL_EXPORTER_OTLP_HEADERS="signoz-access-token={{SIGNOZ_INGESTION_KEY}}" node -r ./tracing.js app.js
```