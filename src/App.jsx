import { useState } from 'react'
import emailList from './data/emailList'
import TopText from './components/TopText'
import './styles.css'
export default function App() {
  const [userInput, setUserInput] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [duplicate, setDuplicate] = useState(null)

  function handleChange(e) {
    setUserInput(e.target.value)
  }

  /* Challenge

    Kullanıcı "Abone Ol" butonuna tıkladığında hiçbir şey olmuyor. Sizin göreviniz bu görevleri tamamlayarak kayıt formunun çalışmasını sağlamaktır: 
    
        1. Kullanıcı "Abone Ol" butonuna tıkladığında aşağıdakiler gerçekleşmelidir: 
			a. userEmail state'i userInput state'i içinde saklanan string'e ayarlanmalıdır.
			b. userInput state'i ilk state'ine - boş bir string - geri ayarlanmalıdır.  
			c. Kodunuz, kullanıcının girdiği email adresinin emailList dizisinde zaten mevcut olup olmadığını büyük/küçük harfe duyarlı olmayan bir şekilde kontrol etmelidir. Eğer varsa, yinelenen state true olarak ayarlanmalıdır. Aksi takdirde, false olarak ayarlanmalıdır. 
        
        2. Formu aşağıdaki üç email adresi ile test etmelisiniz: 
		
				  		  Email		 			              Beklenen Sonuç 				  
			╷-----------------------------╷-----------------------------╷					
		  	|     noDuplicate@gmail.com |	    non-duplicate message   |
			|-----------------------------|-----------------------------|
			|  TestyMcTesterson@gmail.com |	      duplicate message 	|
			|-----------------------------|-----------------------------|
			|  testymctesterson@gmail.com |		  duplicate message     |	
			¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯	
            
        3. Yukarıdakileri doğru bir şekilde yapıp "Abone Ol" butonuna tıklarsanız, input'un placeholder metninin " Arkadaşınızı abone yapın" haline geldiğini ve başka bir email adresi girip onu da kontrol edebildiğinizi görmelisiniz.
 */
  //cozum
  //1. Kullanıcı "Abone Ol" butonuna tıkladığında cagrilacak fonksiyon
  function handleSubmit(e) {
    e.preventDefault()

    // 1a. userEmail state'i userInput state'i içinde saklanan string'e ayarlanmak icin
    setUserEmail(userInput)

    // 1b. userInput state'i ilk state'ine - boş bir string - geri ayarlanmalıdır.
    setUserInput('')

    // 1c. Kullanıcının girdiği email adresi emailList dizisinde zaten mevcut mu kontrol et.
    const isDuplicate = emailList.some(
      (email) => email.toLowerCase() === userInput.toLowerCase()
    )

    // Yinelenen durumu state'e ayarla
    setDuplicate(isDuplicate)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TopText userEmail={userEmail} duplicate={duplicate} />

      <div>
        <input
          required
          placeholder={
            !userEmail ? 'E-mail adresinizi girin' : 'Arkadaşınızı abone yapın'
          }
          type="email"
          name="email"
          onChange={handleChange}
          value={userInput}
        />

        <button type="submit">Abone Olun</button>
      </div>
    </form>
  )
}
