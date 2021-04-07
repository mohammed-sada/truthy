import { IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';
import { IsEqualTo } from '../../common/decorators/is-equal-to.decorator';

/**
 * reset password data transfer object
 */
export class ResetPasswordDto {
  @IsNotEmpty()
  token: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  @Matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/,
    {
      message:
        'password should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character'
    }
  )
  password: string;

  @IsNotEmpty()
  @IsEqualTo('password')
  confirmPassword: string;
}