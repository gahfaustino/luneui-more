import { useState } from 'react'
import './App.css'
import { Button, Input } from 'luneui/ds'

function App() {
  const [count, setCount] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    search: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1>🌙 LuneUI - Components Showcase</h1>
        <p>Teste Técnico para Desenvolvedor Front-End Especialista 😉</p>
      </header>

      {/* Seção de Temas */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>🎨 Opções de Tema</h2>
        <p>Esta biblioteca já vem com tema dark por padrão (porque programador que se preza não usa tema claro, né? 😎) e variáveis CSS customizáveis!</p>
        <div style={{ 
          display: 'grid', 
          gap: '1rem',
          padding: '1.5rem',
          background: 'var(--luneui-color-primary-60)',
          borderRadius: 'var(--luneui-md-radius)'
        }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <strong>Primary Color:</strong>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              background: 'var(--luneui-color-primary)', 
              borderRadius: 'var(--luneui-sm-radius)',
              border: '2px solid var(--luneui-color-primary-40)'
            }} />
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <strong>Secondary Color:</strong>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              background: 'var(--luneui-color-secondary)', 
              borderRadius: 'var(--luneui-sm-radius)',
              border: '2px solid var(--luneui-color-primary-40)'
            }} />
          </div>
        </div>
      </section>

      {/* Button Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>🔘 Componente de Botão</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3>Temas de Botão (tem pra todos os gostos!)</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <Button onClick={() => setCount(count + 1)}>
              Primary ({count})
            </Button>
            <Button theme="secondary">Secondary</Button>
            <Button theme="outline">Outline</Button>
            <Button theme="flat">Flat</Button>
            <Button theme="info">Info</Button>
            <Button theme="success">Success</Button>
            <Button theme="warning">Warning</Button>
            <Button theme="alert">Alert</Button>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Botão como Link (porque sim, dá pra fazer isso! 🔗)</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <Button href="https://github.com" target="_blank">
              GitHub Link
            </Button>
            <Button href="https://luneui.lunare.tech" theme="secondary" target="_blank">
              Documentação
            </Button>
          </div>
        </div>

        <div>
          <h3>Estados do Botão</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <Button onClick={() => alert('Clicou! 🎉')}>
              Clica em Mim!
            </Button>
            <Button disabled>
              Botão Desabilitado
            </Button>
          </div>
        </div>
      </section>

      {/* Input Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>📝 Componente de Input</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3>Tipos de Input (um pra cada necessidade!)</h3>
          <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '500px', margin: '0 auto' }}>
            <Input
              label="Nome"
              type="text"
              name="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleInputChange}
              subText="Seu nome completo (sem apelidos, por favor! 😄)"
            />
            
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="voce@exemplo.com"
              value={formData.email}
              onChange={handleInputChange}
              subText="Prometemos não encher sua caixa de spam! 🤞"
            />
            
            <Input
              label="Senha"
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={formData.password}
              onChange={handleInputChange}
              subText="Pelo menos 8 caracteres (e não use '12345678', tá?) 🔐"
            />
            
            <Input
              label="Busca"
              type="search"
              name="search"
              placeholder="Procurando algo? 🔍"
              value={formData.search}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Temas de Input (mood pra cada ocasião! 🎭)</h3>
          <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '500px', margin: '0 auto' }}>
            <Input
              label="Tema Info"
              type="text"
              theme="info"
              placeholder="Input informativo"
              subText="Aquela dica marota pra te ajudar! 💡"
            />
            
            <Input
              label="Tema Sucesso"
              type="text"
              theme="success"
              placeholder="Input de sucesso"
              subText="Boa! Tá certinho! ✨"
            />
            
            <Input
              label="Tema Atenção"
              type="text"
              theme="warning"
              placeholder="Input de atenção"
              subText="Opa, melhor dar uma conferida nisso aqui! ⚠️"
            />
            
            <Input
              label="Tema Alerta"
              type="text"
              theme="alert"
              placeholder="Input com erro"
              subText="Eita! Tem algo errado aqui... 🚨"
            />
            
            <Input
              label="Tema Preenchido"
              type="text"
              theme="fill"
              placeholder="Input preenchido"
              subText="Estilo alternativo pra variar! 🎨"
            />
          </div>
        </div>

        <div>
          <h3>Exemplo de Formulário (funciona de verdade, pode testar! 🚀)</h3>
          <form 
            onSubmit={(e) => { 
              e.preventDefault(); 
              alert(`Formulário enviado com sucesso! 🎉\nNome: ${formData.name}\nEmail: ${formData.email}`) 
            }}
            style={{ display: 'grid', gap: '1.5rem', maxWidth: '500px', margin: '0 auto' }}
          >
            <Input
              label="Nome Completo *"
              type="text"
              name="name"
              placeholder="Hele Passou do Teste"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            
            <Input
              label="Endereço de Email *"
              type="email"
              name="email"
              placeholder="hele.passou@exemplo.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Button type="submit">Enviar Formulário</Button>
              <Button 
                type="button" 
                theme="outline"
                onClick={() => setFormData({ name: '', email: '', password: '', search: '' })}
              >
                Limpar Tudo
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Rodapé */}
      <footer style={{ 
        textAlign: 'center', 
        marginTop: '4rem', 
        paddingTop: '2rem',
        borderTop: '1px solid var(--luneui-color-primary-50)'
      }}>
        <p>
          Feito com ❤️ para o teste da <strong>Môre</strong> - A melhor biblioteca de UI que esta pessoa já viu! Você amou, eu sei que amou! 😎✨
        </p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
          (E se ainda não amou, dá mais uma chance! 😄💙)
        </p>
      </footer>
    </main>
  )
}

export default App
