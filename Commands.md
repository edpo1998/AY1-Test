cd FrontendPark
npm i
npm run dev

cd ..
cd BackendPark
cd backend
# Crear un entorno virtual
# Activar el entorno virtual
pip install -r requirements/base.txt
python manage.py migrate
python manage.py runserver