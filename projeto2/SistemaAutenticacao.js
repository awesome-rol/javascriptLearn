/* 
Ser autenticavel significa ter o método autenticar
*/

export class SistemaAutenticacao{
    static login(usuario, senha){
        if(SistemaAutenticacao.ehAutenticavel(usuario)){
            return usuario.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(usuario){
        return "autenticar" in usuario &&
        usuario.autenticar instanceof Function
    }
}

SistemaAutenticacao.login()

