import { useParams, Link } from 'react-router-dom';
import { Hero, NetworkBgV1, NetworkBgV2, NetworkBgV3 } from '@steschoch/digital-pampas-ds';
import styles from './PreviewPage.module.css';

const VARIANTS = {
  '1': {
    label: 'V1: Ghost',
    desc: 'Monochrome minimal, linhas finas brancas, nós só com borda, logos em branco, pulsos sem glow',
    slot: <NetworkBgV1 />,
  },
  '2': {
    label: 'V2: Spectrum',
    desc: 'Cores das ferramentas, cada nó usa a cor da brand, linhas em gradiente colorido, pulsos com glow',
    slot: <NetworkBgV2 />,
  },
  '3': {
    label: 'V3: Flow',
    desc: 'Bezier curvo + órbita, conexões orgânicas curvas, anel girando, pulsos cyan com rastro',
    slot: <NetworkBgV3 />,
  },
} as const;

export default function PreviewPage() {
  const { v = '1' } = useParams<{ v: string }>();
  const variant = VARIANTS[v as keyof typeof VARIANTS] ?? VARIANTS['1'];

  return (
    <div className={styles.page}>
      {/* Variant selector bar */}
      <div className={styles.bar}>
        <span className={styles.barLabel}>Escolha a animação:</span>
        {(['1', '2', '3'] as const).map(id => (
          <Link
            key={id}
            to={`/preview/${id}`}
            className={[styles.varBtn, v === id ? styles.varBtnActive : ''].join(' ')}
          >
            {VARIANTS[id].label}
          </Link>
        ))}
        <span className={styles.barDesc}>{variant.desc}</span>
      </div>

      {/* Full Hero with the selected variant */}
      <Hero networkSlot={variant.slot} />
    </div>
  );
}
