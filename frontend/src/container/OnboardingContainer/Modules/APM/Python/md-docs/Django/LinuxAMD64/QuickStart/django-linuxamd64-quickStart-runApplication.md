Once you are done intrumenting your python application, you can run it using this command

```bash
OTEL_RESOURCE_ATTRIBUTES=service.name={{MYAPP}} \
OTEL_EXPORTER_OTLP_ENDPOINT="https://ingest.{{REGION}}.signoz.cloud:443" \
OTEL_EXPORTER_OTLP_HEADERS="signoz-access-token={{SIGNOZ_INGESTION_KEY}}" \
OTEL_EXPORTER_OTLP_PROTOCOL=grpc \
opentelemetry-instrument <your_run_command>
```

`<your_run_command>` can be something like `python3 app.py` or `python manage.py runserver --noreload`

**Note**
- Don’t run app in reloader/hot-reload mode as it breaks instrumentation. For example, you can disable the auto reload with --noreload.
