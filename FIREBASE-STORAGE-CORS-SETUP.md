# Fix Firebase Storage CORS Error

The "blocked by CORS policy" error when adding blogs with images happens because your Firebase Storage bucket doesn't allow requests from your dev server (`http://127.0.0.1:5174`).

## Easiest Fix: Use Google Cloud Shell (no install)

1. Go to **[Google Cloud Console](https://console.cloud.google.com)**
2. Make sure project **youware-website** is selected (top bar)
3. Click the **Cloud Shell** icon (terminal) in the top-right
4. Copy the contents of `apply-cors-cloudshell.sh` from this project, paste into Cloud Shell, and run it

---

## Alternative: Install gcloud locally

### 1. Install Google Cloud SDK

**macOS (Homebrew):**
```bash
brew install --cask google-cloud-sdk
```

**macOS (no Homebrew):** Download from https://cloud.google.com/sdk/docs/install

### 2. Log in and apply CORS

```bash
gcloud auth login
gcloud config set project youware-website
gcloud storage buckets update gs://youware-website.appspot.com --cors-file=firebase-storage-cors.json
```

### 3. Test

1. Clear your browser cache (CORS responses can be cached)
2. Restart your dev server
3. Try adding a blog with an image again

---

## Also Check: Firebase Storage Rules

If CORS is fixed but uploads still fail, check your **Firebase Storage Rules** in the [Firebase Console](https://console.firebase.google.com) → Storage → Rules.

If you're not using Firebase Authentication, you need rules that allow writes. For development, you might use:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /blogImages/{allPaths=**} {
      allow read, write: if true;  // For dev only - restrict in production!
    }
    match /promptImages/{allPaths=**} {
      allow read, write: if true;  // For dev only - restrict in production!
    }
  }
}
```

For production, use Firebase Auth and require `request.auth != null`.
