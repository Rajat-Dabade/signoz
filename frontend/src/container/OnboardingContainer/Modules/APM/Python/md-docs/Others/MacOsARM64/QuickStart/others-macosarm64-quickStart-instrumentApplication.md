
After setting up the Otel collector agent, follow the steps below to instrumnet your Python Application

#### Requirements
- Python 3.8 or newer

### Step 1 : Create a virtual environment

```bash
python3 -m venv .venv
source .venv/bin/activate
```
This will create and activate a virtual environment named `.venv`

### Step 2 : Install the OpenTelemetry dependencies

```bash
pip install opentelemetry-distro==0.38b0
pip install opentelemetry-exporter-otlp==1.17.0
```

### Step 3 : Add automatic instrumentation

```bash
opentelemetry-bootstrap --action=install
```


