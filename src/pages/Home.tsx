import { Box, Button, Typography, Divider, Container } from '@mui/material';
import BlurText from "../components/BlurText";

export default function Home() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                px: 2,
                minHeight: 'calc(100vh - 200px)', 
                fontFamily: 'sans-serif',
            }}
        >
            <BlurText
                text="Você quer aprender libras?"
                delay={150}
                animateBy="words"
                direction="top"
                sx={{
                    typography: 'h3',
                    fontWeight: 'bold',
                }}
            />

            <Typography
                variant="h6"
                sx={{
                    color: '#555'
                }}
            >
                Venha aprender com KLibras
            </Typography>


             <Box sx={{
                mt: '8vh'
             }
             }>
                 <img
            src="/screen.png"
            alt="Logo"
            style={{ width: '200px', height: 'auto' }}
            />


            </Box>

            <Button // Mudar aqui pra quando tiver o link
                variant="outlined"
                startIcon={<img src="/download.svg" alt="download" style={{ height: '24px', width: '24px' }} />}
                sx={{
                    mt: 6,
                    color: 'black',
                    borderColor: 'black',
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    py: 1.5,
                    px: 4,
                    '&:hover': {
                        borderColor: 'black',
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                }}
            >
                Baixe agora
            </Button>


           

            <Divider sx={{ width: '100%', mt: 4, mb: 8 }} />     

                    
              <Box
              sx={{
                mt: 8,
                mb: 4,
                width: { xs: '100%', sm: '80%', md: '560px' },
                aspectRatio: '16 / 9',
                boxShadow: 3,
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >


              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/WvkvoE94So4" // Mudar o vídeo aqui quando tiver
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>    

            
            <Divider sx={{ width: '100%', mt: 4, mb: 8 }} />         
            
              <Container sx={{ py: 8, textAlign: 'center' }}>
                <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Por que KLibras?
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: '750px', mx: 'auto', mt: 3, color: '#444', fontSize: '1.1rem' }}>
                    KLibras é mais do que um aplicativo; é a sua ponte para um mundo mais inclusivo. Nossa missão é tornar o aprendizado da Língua Brasileira de Sinais (Libras) uma experiência acessível, interativa e eficaz para todos.
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: '750px', mx: 'auto', mt: 3, color: '#444', fontSize: '1.1rem', fontWeight: 'bold' }}>
                    Nosso grande diferencial é a tecnologia de reconhecimento por câmera.
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: '750px', mx: 'auto', mt: 2, color: '#444', fontSize: '1.1rem' }}>
                    Com ela, você pode praticar os sinais e receber feedback em tempo real, garantindo um aprendizado correto e confiante. Aliado a um conteúdo estruturado e elementos de gamificação que te mantêm engajado, o KLibras transforma o desafio de aprender um novo idioma em uma jornada divertida e recompensadora.
                </Typography>
            </Container>

        </Box>
    );
}

