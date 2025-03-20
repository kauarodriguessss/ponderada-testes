import requests
import json

# API Endpoint
API_URL = "https://example.com/api/profissionais"

# Test data for new professional
payload = {
    "nome": "Carlos Silva",
    "email": "carlos.silva@example.com",
    "telefone": "11987654321",
    "especialidade": "Psicopedagogo"
}

# Headers (modify if authentication is required)
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer <YOUR_ACCESS_TOKEN>"
}

# Send POST request to create a new professional
response = requests.post(API_URL, headers=headers, data=json.dumps(payload))

# Validate response for professional creation
if response.status_code == 201:
    print("✅ Test passed: Professional successfully created!")
    created_professional = response.json()
    print("Response:", created_professional)
    
    # Verify the professional was actually created
    professional_id = created_professional.get("id")
    if professional_id:
        response_get = requests.get(f"{API_URL}/{professional_id}", headers=headers)
        if response_get.status_code == 200 and response_get.json().get("nome") == payload["nome"]:
            print("✅ Test passed: Professional exists in database!")
        else:
            print("❌ Test failed: Professional not found after creation.")
    else:
        print("❌ Test failed: No ID returned after creation.")
else:
    print("❌ Test failed: Error creating professional.")
    print("Status Code:", response.status_code)
    print("Response:", response.text)
