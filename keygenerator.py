import uuid
import hmac
import hashlib

def generate_consumer_key():
    return str(uuid.uuid4())

def generate_shared_secret():
    return str(uuid.uuid4().hex)

def generate_hmac_signature(shared_secret, message):
    return hmac.new(bytes(shared_secret, 'latin-1'), msg=bytes(message, 'latin-1'), digestmod=hashlib.sha256).hexdigest()

consumer_key = generate_consumer_key()
shared_secret = generate_shared_secret()

print("Consumer Key:", consumer_key)
print("Shared Secret:", shared_secret)

message = "example message"
signature = generate_hmac_signature(shared_secret, message)

print("HMAC Signature:", signature)