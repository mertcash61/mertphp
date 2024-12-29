from flask import Flask, render_template, request, jsonify
import os
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    
    # Form verilerini al
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    
    # Log dosyasına kaydet
    log_message = f"""
    Tarih: {datetime.now()}
    İsim: {name}
    Email: {email}
    Mesaj: {message}
    ------------------------
    """
    
    with open('contact_logs.txt', 'a', encoding='utf-8') as f:
        f.write(log_message)
    
    # Email gönderme işlemi burada yapılabilir
    
    return jsonify({
        'success': True,
        'message': 'Mesajınız başarıyla gönderildi!'
    })

@app.route('/api/projects')
def get_projects():
    # Örnek proje verileri
    projects = [
        {
            'id': 1,
            'title': 'E-Ticaret Projesi',
            'description': 'Modern bir e-ticaret sitesi',
            'image': 'project1.jpg',
            'technologies': ['HTML', 'CSS', 'JavaScript', 'PHP']
        },
        {
            'id': 2,
            'title': 'Blog Platformu',
            'description': 'Kişisel blog sitesi',
            'image': 'project2.jpg',
            'technologies': ['React', 'Node.js', 'MongoDB']
        }
    ]
    
    return jsonify(projects)

if __name__ == '__main__':
    app.run(debug=True)
