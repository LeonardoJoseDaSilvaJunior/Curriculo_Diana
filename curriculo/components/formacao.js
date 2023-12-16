import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function FormacaoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Faculdade Senac (Serviço Nacional de Aprendizagem Comercial)
      </Text>
   
      <Text style={styles.text}>
        Tecnólogo em Análise e Desenvolvimento de Sistemas - 576h/2022.1 – 2024.2 (Em andamento).
      </Text>
      <Text style={styles.text}>
        Descrição: 1° Qualificação em Programador de Sistemas, após a conclusão do 2º módulo. • Qualificação em Projetista de Sistemas, após a conclusão do 3º módulo. • Qualificação em Desenvolvedor de Sistemas, após a conclusão do 4º módulo.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.titulo}>
         Senai (Serviço Nacional de Aprendizagem Industrial)
      </Text>
        Curso de qualificação em desenvolvimento Back-end - 450h/2022.1 - 2023.1 (Em andamento).
      </Text>
      <Text style={styles.text}>
        Descrição: Fundamentos de Tecnologia da Informação e Comunicação; Fundamentos da Qualidade e Produtividade; Saúde e Segurança no Trabalho; Fundamentos da Indústria 4.0; Sustentabilidade em Processos Industriais; Metodologias ágeis; Versionamento; Lógica de programação; Codificação para Back-end; Base de dados; Desenvolvimento de APIs; Testes de Back-end.
      </Text>
      <Text style={styles.text}>
        Senac (Serviço Nacional de Aprendizagem Comercial) - Técnico em Finanças - 800h/2021.2 (Concluído).
      </Text>
      <Text style={styles.text}>
        Descrição: Matemática financeira; Administrar contas a pagar, contas a receber e tesouraria; Identificar custos e gastos, definir margem de contribuição, elaborar preços e gerir estoque; Elaborar, implementar e executar planejamentos e orçamentos; Fazer fluxo de caixa, relatórios e analisar indicadores de desempenho; Participar da tomada de decisões sobre financiamentos e investimentos; Identificar regimes de capitalização de juros e sistemas de amortização de empréstimos e financiamentos; Conceitos sobre mercado de câmbio, commodities, importação e exportação de produtos.
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    position: 'relative',
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 8,
    margin: 24,

  },
  titulo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});
