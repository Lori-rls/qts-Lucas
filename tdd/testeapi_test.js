import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let aluno = 'Cróvis José'
let professores = ['João', 'Laís', 'Davi', 'Bruno Aparecido Cano']

Deno.test("teste de assertions (API)", () => {
    assertEquals(aluno, "Cróvis José");
    assertStringIncludes(aluno, "José");
})

Deno.test("Testando array de professor (API)", () => {
    assertArrayIncludes(professores,
        ["Davi", "Laís", "Alan"],
        "Opa! Algo deu errado! D:" );
})