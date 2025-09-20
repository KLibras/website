import { Container, Typography, Box } from "@mui/material";

export default function About() {

    return (
        <>
            <Container sx={{ py: 8, textAlign: 'center' }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Sobre o KLibras
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: '750px', mx: 'auto', mt: 3, color: '#444', fontSize: '1.1rem' }}>
                    KLibras é mais do que um aplicativo; é a sua ponte para um mundo mais inclusivo. Nossa missão é tornar o aprendizado da Língua Brasileira de Sinais (Libras) uma experiência acessível, interativa e eficaz para todos.
                </Typography>

                <Box sx={{ my: 8 }}>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Nosso Objetivo
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: '750px', mx: 'auto', mt: 2, color: '#444', fontSize: '1.1rem' }}>
                        Nosso objetivo é quebrar barreiras de comunicação, oferecendo uma ferramenta poderosa que combina tecnologia de ponta com métodos de ensino comprovados. Queremos capacitar jovens, estudantes e qualquer pessoa interessada a aprender Libras de forma autônoma e divertida, promovendo a inclusão e o entendimento.
                    </Typography>
                </Box>

                <Box sx={{ my: 8 }}>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Nossa Tecnologia
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: '750px', mx: 'auto', mt: 2, color: '#444', fontSize: '1.1rem' }}>
                        O coração do KLibras é a nossa inovadora funcionalidade de reconhecimento de sinais por câmera. Usando inteligência artificial, o aplicativo analisa seus movimentos e oferece feedback instantâneo, permitindo que você pratique e aperfeiçoe seus sinais como se tivesse um instrutor ao seu lado. Acreditamos que a prática interativa é a chave para a fluência.
                    </Typography>
                </Box>
            </Container>
        </>
    )
}
