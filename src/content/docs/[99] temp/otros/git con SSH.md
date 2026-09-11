---
title: git con SSH
---

# Guía completa — GitHub con múltiples cuentas SSH

## 📌 Estructura que ya tienes configurada

Tu archivo `~/.ssh/config` define 3 cuentas distintas:

```ssh
# Cuenta 1 - prueba-1
Host user-1
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_user1

# Cuenta 2 - prueba-2
Host user-2
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_user2

# Cuenta 3 - prueba-3
Host user-3
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_user3
```

Esto significa:

|Alias SSH|Cuenta GitHub|Llave usada|
|---|---|---|
|user-1|prueba-1|id_user1|
|user-2|prueba-2|id_user2|
|user-3|prueba-3|id_user3|

Git usará la cuenta según el **alias que tenga el remote** del repositorio.

---

# 1️⃣ Verificar que las llaves existen

```bash
ls -al ~/.ssh
```

Debes ver algo como:

```
id_user1
id_user1.pub
id_user2
id_user2.pub
id_user3
id_user3.pub
```

Si falta alguna, créala.

---

# 2️⃣ Crear una nueva llave SSH (si falta)

Ejemplo para user-1:

```bash
ssh-keygen -t ed25519 -C "correo_user1@ejemplo.com" -f ~/.ssh/id_user1
```

Repetir para cada cuenta cambiando el nombre:

```bash
ssh-keygen -t ed25519 -C "correo_user2@ejemplo.com" -f ~/.ssh/id_user2
ssh-keygen -t ed25519 -C "correo_user3@ejemplo.com" -f ~/.ssh/id_user3
```

No es necesario passphrase si quieres acceso directo.

---

# 3️⃣ Iniciar el agente SSH y registrar llaves

```bash
eval "$(ssh-agent -s)"
```

Agregar llaves:

```bash
ssh-add ~/.ssh/id_user1
ssh-add ~/.ssh/id_user2
ssh-add ~/.ssh/id_user3
```

Ver llaves activas:

```bash
ssh-add -l
```

---

# 4️⃣ Registrar llaves en GitHub

Mostrar clave pública:

```bash
cat ~/.ssh/id_user1.pub
```

Copiar salida completa.

Luego en GitHub:

```
Settings → SSH and GPG keys → New SSH key
```

Repetir para cada cuenta.

---

# 5️⃣ Verificar conexión con cada cuenta

Esto confirma a qué usuario pertenece cada llave.

```bash
ssh -T git@user-1
ssh -T git@user-2
ssh -T git@user-3
```

GitHub responderá:

```
Hi prueba-1! You've successfully authenticated...
```

---

# 6️⃣ Clonar un repositorio con la cuenta correcta

⚠️ Paso clave: usar el alias SSH en la URL.

Formato:

```bash
git clone git@ALIAS:usuario/repositorio.git
```

Ejemplos:

```bash
git clone git@user-1:prueba-1/proyecto.git
git clone git@user-2:prueba-2/proyecto.git
git clone git@user-3:prueba-3/proyecto.git
```

Esto determina qué cuenta tendrá acceso.

---

# 7️⃣ Configurar identidad de commit por proyecto

Entrar al repositorio:

```bash
cd proyecto
```

Configurar usuario SOLO para ese repo:

```bash
git config user.name "Nombre Cuenta"
git config user.email "correo@github.com"
```

Ver configuración actual:

```bash
git config --list
```

---

# 8️⃣ Ver qué cuenta está usando el repositorio

```bash
git remote -v
```

Debe verse algo así:

```
origin  git@user-1:prueba-1/proyecto.git (fetch)
origin  git@user-1:prueba-1/proyecto.git (push)
```

Si aparece `github.com` sin alias, no usará tu cuenta correcta.

---

# 9️⃣ Cambiar el remote a otra cuenta

Ejemplo cambiar repo para usar user-2:

```bash
git remote set-url origin git@user-2:prueba-2/proyecto.git
```

Verificar:

```bash
git remote -v
```

---

# 🔟 Flujo completo para hacer tu primer commit

### Inicializar repositorio (si no existe)

```bash
git init
```

### Agregar archivos

```bash
git add .
```

### Crear commit

```bash
git commit -m "primer commit"
```

### Crear rama main si no existe

```bash
git branch -M main
```

### Conectar repo remoto con cuenta correcta

Ejemplo user-1:

```bash
git remote add origin git@user-1:prueba-1/proyecto.git
```

### Subir cambios

```bash
git push -u origin main
```

---

# 1️⃣1️⃣ Cambiar de cuenta en un mismo proyecto

Cambiar remote:

```bash
git remote set-url origin git@user-3:prueba-3/proyecto.git
```

Cambiar identidad del commit:

```bash
git config user.name "Nombre Cuenta 3"
git config user.email "correo3@github.com"
```

---

# 1️⃣2️⃣ Diagnóstico rápido si algo falla

### Ver cuenta que responde SSH

```bash
ssh -T git@user-1
```

### Ver identidad del commit

```bash
git config user.name
git config user.email
```

### Ver URL remota

```bash
git remote -v
```

### Error común

```
Permission denied (publickey)
```

Solución:

```bash
ssh-add ~/.ssh/id_userX
```

---

# 1️⃣3️⃣ Regla fundamental para múltiples cuentas

La cuenta usada depende de:

```
REMOTE URL → alias SSH → llave → cuenta GitHub
```

El nombre del commit NO cambia la cuenta de acceso, solo el autor visible.

---

# 1️⃣4️⃣ Ejemplo real completo (desde cero)

```bash
# clonar con cuenta 2
git clone git@user-2:prueba-2/app-web.git

cd app-web

# configurar identidad visible
git config user.name "Prueba 2"
git config user.email "correo2@github.com"

# trabajar normalmente
git add .
git commit -m "feat: inicio del proyecto"
git push
```

---

# 1️⃣5️⃣ Comandos de referencia rápida

```bash
# ver llaves
ls ~/.ssh

# probar cuenta
ssh -T git@user-1

# ver remote
git remote -v

# cambiar cuenta
git remote set-url origin git@user-2:usuario/repo.git

# configurar identidad
git config user.name "Nombre"
git config user.email "correo"

# flujo normal
git add .
git commit -m "mensaje"
git push
```
