import React, { useState, useCallback, useRef } from 'react';
import {
  Alert,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  Container,
  Title,
  Subtitle,
  Form,
  LabelInput,
  Input,
  Button,
  TextButton,
  MessageIMC,
  ResultIMC,
} from './styles';

interface IMCProps {
  imc: number;
  classification: string;
}

const Main: React.FC = () => {
  const heightInputRef = useRef<TextInput>(null);
  const [height, setheight] = useState<string>();
  const [weight, setWeight] = useState<string>();
  const [resultIMC, setResultIMC] = useState<IMCProps>({} as IMCProps);

  const handleClassification = useCallback((imc: number) => {
    if (imc < 17) return 'Muito abaixo do peso';
    if (imc >= 17 && imc < 18.49) return 'Abaixo do peso';
    if (imc >= 18.5 && imc < 24.99) return 'Peso normal';
    if (imc >= 25 && imc < 29.99) return 'Acima do peso';
    if (imc >= 30 && imc < 34.99) return 'Obesidade I';
    if (imc >= 35 && imc < 39.99) return 'Obesidade II (Severa)';
    if (imc >= 40) return 'Obesidade III (Mórbida)';
  }, []);

  const handleIMC = useCallback(
    (userHeight, userWeight) => {
      if (!userHeight || !userWeight)
        return Alert.alert('Atenção', 'Peso ou altura não podem ser vazio.');

      const heightSquared =
        Number(userHeight.replace(',', '.')) *
        Number(userHeight.replace(',', '.'));

      const imc = Number((Number(userWeight) / heightSquared).toFixed(2));

      setResultIMC({
        imc,
        classification: handleClassification(imc),
      } as IMCProps);

      setWeight('');
      setheight('');

      Keyboard.dismiss();
    },
    [handleClassification],
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Container>
        <Title>Calculadora de IMC</Title>

        {resultIMC.imc ? (
          <>
            <MessageIMC>{`O Seu IMC é ${resultIMC.imc}`}</MessageIMC>
            <ResultIMC result={resultIMC.classification === 'Peso normal'}>
              {resultIMC.classification}
            </ResultIMC>
          </>
        ) : (
          <Subtitle>Preencha os dados abaixo para calcular o seu IMC</Subtitle>
        )}

        <Form>
          <LabelInput>Informe o peso (KG)</LabelInput>
          <Input
            placeholder="Exemplo: 79,8"
            value={weight}
            onChangeText={text => setWeight(text)}
            contextMenuHidden
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => {
              heightInputRef.current?.focus();
            }}
          />

          <LabelInput>Informe a altura (M)</LabelInput>
          <Input
            ref={heightInputRef}
            placeholder="Exemplo: 1,70"
            value={height}
            onChangeText={text => setheight(text)}
            contextMenuHidden
            keyboardType="numeric"
            returnKeyType="send"
            onSubmitEditing={() => {
              handleIMC(height, weight);
            }}
          />
          <Button onPress={() => handleIMC(height, weight)}>
            <TextButton>Calcular</TextButton>
          </Button>
        </Form>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Main;
