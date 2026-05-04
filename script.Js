// 1. بيانات المنتجات (يمكنك إضافة المزيد هنا بسهولة)
const shoes =
[
     
    {
         id: "1",        
        image: "images/WhatsApp Image 2026-05-04 at 3.45.16 PM.jpeg"
    },
{
         id:"2",
         image: "images/WhatsApp Image 2026-05-04 at 5.29.29 PM.jpeg"
},
    
    
]

// 2. وظيفة عرض المنتجات
function renderProducts() {
    const container = document.getElementById('shoes-container');
    container.innerHTML = ""; // مسح كلمة "جاري التحميل"

    shoes.forEach(item => {
        const card = `
            <div class="shoe-card">
                <img src="${item.image}" alt="${item.name}">
                <div class="shoe-info">
                    <span class="model-number">موديل: #${item.id}</span>
                    
                    <button class="btn-order" onclick="sendWhatsApp('${item.id}', '${item.name}')">
                        اطلب الآن (واتساب)
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// 3. وظيفة إرسال الرسالة للواتساب
function sendWhatsApp(modelId) {
    const phoneNumber = "201066979318"; // *** غير الرقم ده لرقمك الحقيقي بالكود الدولي ***
    const message = `أهلاً، أريد الاستفسار عن كوتشي:\nرقم الموديل: ${modelId}`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// تشغيل الوظيفة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderProducts);
