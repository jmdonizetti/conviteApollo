function submitForm() {
    let names = document.getElementById("names").value;

    // Criar uma mensagem com os nomes e instruções
    let message = `Envie a mensagem para confirmar a presença dos convidados: ${names}. Muito Obrigado sua presença é motivo de muita alegria.`;

    // Criar a URL do WhatsApp com a mensagem pré-definida
    let whatsappURL = "https://api.whatsapp.com/send?phone=+5512982268834&text=" + encodeURIComponent(message);

    // Abrir a URL do WhatsApp em uma nova aba
    window.open(whatsappURL, '_blank');
  }