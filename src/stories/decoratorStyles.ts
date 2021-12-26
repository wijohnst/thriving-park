/**
 * @module
 *
 * Defines inline styles for Storybook decorators
 *
 * @see decorators
 */
export const paddedDiv = {
  padding: '10px',
};

export const centerDiv = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const standardWrapper = {
  ...paddedDiv,
  ...centerDiv,
};

export const diagonalPatternBackground = {
  background: `
		linear-gradient(-90deg, rgba(0,0,0,.05) 1px, transparent 1px),
		linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), 
		linear-gradient(-90deg, rgba(0, 0, 0, .04) 1px, transparent 1px),
		linear-gradient(rgba(0,0,0,.04) 1px, transparent 1px),
		linear-gradient(transparent 3px, #f2f2f2 3px, #f2f2f2 78px, transparent 78px),
		linear-gradient(-90deg, #aaa 1px, transparent 1px),
		linear-gradient(-90deg, transparent 3px, #f2f2f2 3px, #f2f2f2 78px, transparent 78px),
		linear-gradient(#aaa 1px, transparent 1px),
		black
	`,
  backgroundSize: `
		20px 20px,
		20px 20px,
		80px 80px,
		80px 80px,
		80px 80px,
		80px 80px,
		80px 80px,
		80px 80px
	`,
};
