import { Container, Typography, Box } from "@mui/material";

export default function Terms() {
    return (
        <Container sx={{ py: 8, textAlign: 'left' }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6 }}>
                Termos de Serviço
            </Typography>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>1. Aceitação dos Termos</Typography>
                <Typography variant="body1" sx={{ mt: 1, color: '#444' }}>
                    Ao usar o aplicativo KLibras, você concorda com estes Termos de Serviço. Se você não concordar, não utilize o aplicativo.
                </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>2. Uso do Aplicativo</Typography>
                <Typography variant="body1" sx={{ mt: 1, color: '#444' }}>
                    Você concorda em usar o KLibras apenas para fins de aprendizado e de acordo com todas as leis aplicáveis. É proibido tentar reverter a engenharia, descompilar ou usar o aplicativo para fins ilegais.
                </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>3. Assinaturas Premium</Typography>
                <Typography variant="body1" sx={{ mt: 1, color: '#444' }}>
                    Oferecemos recursos adicionais através de uma assinatura paga. Os pagamentos serão processados através da loja de aplicativos e estarão sujeitos aos seus termos. As assinaturas podem ser gerenciadas nas configurações da sua conta na loja de aplicativos.
                </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>4. Limitação de Responsabilidade</Typography>
                <Typography variant="body1" sx={{ mt: 1, color: '#444' }}>
                    O KLibras é fornecido "como está", sem garantias de qualquer tipo. Não nos responsabilizamos por quaisquer danos diretos ou indiretos decorrentes do uso do nosso aplicativo.
                </Typography>
            </Box>

            <Typography variant="body2" sx={{ mt: 6, textAlign: 'center', fontStyle: 'italic' }}>
                Última atualização: 20 de setembro de 2025
            </Typography>
        </Container>
    );
}
