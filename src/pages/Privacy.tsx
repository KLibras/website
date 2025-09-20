import { Container, Typography, Box } from "@mui/material";

export default function Privacy() {
    return (
        <Container sx={{ py: 8, textAlign: 'left' }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6 }}>
                Política de Privacidade
            </Typography>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>1. Coleta de Dados</Typography>
                <Typography variant="body1" sx={{ mt: 1, color: '#444' }}>
                    Coletamos informações para fornecer e melhorar nosso serviço. Isso inclui dados de uso anônimos para análise e, para a funcionalidade principal, o acesso à sua câmera. O processamento de imagens para reconhecimento de sinais ocorre no seu dispositivo e as imagens não são armazenadas por nós.
                </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>2. Uso das Informações</Typography>
                <Typography variant="body1" sx={{ mt: 1, color: '#444' }}>
                    As informações são usadas para operar, manter e melhorar os recursos do aplicativo, como fornecer feedback sobre a prática de sinais. Para usuários da versão gratuita, podemos usar dados não pessoais para exibir anúncios relevantes.
                </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>3. Compartilhamento de Dados</Typography>
                <Typography variant="body1" sx={{ mt: 1, color: '#444' }}>
                    Não vendemos ou alugamos suas informações pessoais. Podemos compartilhar dados anônimos e agregados com parceiros para fins de análise ou publicidade.
                </Typography>
            </Box>

             <Box sx={{ mb: 4 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>4. Segurança</Typography>
                <Typography variant="body1" sx={{ mt: 1, color: '#444' }}>
                    Empregamos medidas de segurança para proteger suas informações, mas lembre-se que nenhum método de transmissão pela internet é 100% seguro.
                </Typography>
            </Box>

            <Typography variant="body2" sx={{ mt: 6, textAlign: 'center', fontStyle: 'italic' }}>
                Última atualização: 20 de setembro de 2025
            </Typography>
        </Container>
    );
}
