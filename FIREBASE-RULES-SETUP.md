# Fix "Missing or insufficient permissions"

Your app needs Firebase Security Rules that allow the operations it performs. Follow these steps:

## Option A: Update rules in Firebase Console (easiest)

### 1. Firestore rules

1. Go to [Firebase Console](https://console.firebase.google.com) → **youware-website** → **Firestore Database** → **Rules**
2. Replace the existing rules with the contents of `firestore.rules` in this project
3. Click **Publish**

### 2. Storage rules

1. Go to [Firebase Console](https://console.firebase.google.com) → **youware-website** → **Storage** → **Rules**
2. Replace the existing rules with the contents of `storage.rules` in this project
3. Click **Publish**

---

## Option B: Deploy with Firebase CLI

If you have Firebase CLI installed:

```bash
firebase init firestore storage   # If not already initialized
firebase deploy --only firestore:rules,storage
```

---

## What these rules allow

| Service   | Collection/Path | Access                                      |
|-----------|-----------------|---------------------------------------------|
| Firestore | `contacts`      | Create (contact form), read/delete (admin)  |
| Firestore | `prompts`       | Read (public), create/update/delete (admin) |
| Firestore | `blogs`         | Read (public), create/update/delete (admin) |
| Storage   | `blogImages/`   | Read and write                              |
| Storage   | `promptImages/` | Read and write                              |

**Security note:** These rules allow unauthenticated access for development. For production, add Firebase Authentication and restrict admin operations to signed-in users.
