import { Container, Typography, Box } from "@mui/material";

const faqs = [
    {
        question: "O aplicativo KLibras é gratuito?",
        answer: "A versão básica do KLibras é gratuita e oferece acesso a diversas lições e funcionalidades essenciais. Também oferecemos uma assinatura premium que desbloqueia todo o conteúdo, remove anúncios e oferece recursos avançados para acelerar seu aprendizado."
    },
    {
        question: "Como funciona a tecnologia de reconhecimento por câmera?",
        answer: "Nossa tecnologia utiliza a câmera do seu celular e um modelo de inteligência artificial para analisar os sinais que você faz. O sistema compara seus movimentos com a forma correta do sinal e fornece feedback em tempo real para ajudar você a corrigir e melhorar sua técnica."
    },
    {
        question: "Preciso de algum conhecimento prévio para usar o app?",
        answer: "Não! O KLibras foi projetado tanto para iniciantes absolutos quanto para aqueles que já têm algum conhecimento de Libras. Nossas lições são estruturadas de forma progressiva, começando do alfabeto e sinais básicos até conversas mais complexas."
    },
    {
        question: "Meus dados e imagens estão seguros?",
        answer: "Levamos sua privacidade muito a sério. As imagens capturadas pela câmera para o reconhecimento de sinais são processadas diretamente no seu dispositivo e não são armazenadas em nossos servidores. Para mais detalhes, por favor, consulte nossa Política de Privacidade."
    }
];

export default function Faq() {
    return (
        <Container sx={{ py: 8 }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6 }}>
                Perguntas Frequentes (FAQs)
            </Typography>
            {faqs.map((faq, index) => (
                <Box key={index} sx={{ mb: 4, textAlign: 'left' }}>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                        {faq.question}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1, color: '#444' }}>
                        {faq.answer}
                    </Typography>
                </Box>
            ))}
        </Container>
    );
}
